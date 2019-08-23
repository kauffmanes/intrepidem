---
title: Saving Angular form data without an internet connection
date: "2017-06-18"
path: /writing/saving-angular-form-data-without-an-internet-connection
---

And then syncing it once there is!

![](https://cdn-images-1.medium.com/max/2000/1*DtzclpizHf9mmf5yOc3OLg.png)

As I alluded to in my [previous article](https://medium.com/@kauffmanes/deploying-a-node-app-to-digitalocean-87533c107cb3), I have been actively working on a [data collection application](https://github.com/kauffmanes/acoma-data-app) to be used by archaeologists in the Southwest, USA. Due to the unique requirements that accompany an app that must be used in the middle of a desert with no internet connection, I have been able to learn quite a few new alternate ways of accomplishing certain tasks.

## Overview

In this article, I will walk you through creating a simple Angular form, saving the form data locally, and then finally how to submit the data once a connection has been established.

## Setting up the form

First things first, you’ll need an Angular project. The completed tutorial and set up can be found [here](https://github.com/kauffmanes/angular-offline-form-tutorial). You may skip this beginning part if you’re adding this form to an existing project.
> **Note**: When including libraries in your project, make sure to have the actual file downloaded (ex. angular.js) as opposed to any CDN — your app needs to work offline and the CDN call would fail.

To start, we’ll have a basic **app.js** that will contain all of our Angular code, and an **index.html** that will contain all of the html.

<iframe src="https://medium.com/media/ca34279f4e4b9e910205aec79fd435c5" frameborder=0></iframe>

From here, we will build the form. We’re going to make a simple tool that collects data about birds. If you’re walking through the forest studying animal species of any kind, you may not be able to always to connect to the internet, depending on your location.

<iframe src="https://medium.com/media/1920b570732c65c4067688a7735dc42b" frameborder=0></iframe>

You can see I’ve added data-ng-model to each of the inputs. I like to have all of my inputs models under a parent object called $scope.formData for easier management and submission.

Next, we’ll create and update our controller code to contain the formData object, as well as two functions:

<iframe src="https://medium.com/media/1f614dd51532dd346bd4bb06aa3f7c5b" frameborder=0></iframe>

$scope.save will handle saving to local storage, and $scope.sync will handle submitting to the service, once an internet connection exists.

To accomplish this, we’ll follow these steps:

1. Fill out form and submit

1. Stringify the form data

1. Save string to local storage, with unique identifier

1. With internet connection, parse localStorage records back into JSON

1. Submit form data

### Save function

[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) stores information in string key-value pairs. Each “row” in the localStorage object will correspond to a form submission. This makes parsing it easier later, because we’ll simply loop through each row and submit.
> Chrome users: to see what’s in localStorage, open your developer console, click the “Application” tab, and then Click “Local Storage” on the left sidebar, under “Storage.”

Right now, it is empty and should look something like this:

![](https://cdn-images-1.medium.com/max/2000/1*yXuOvlItqTMdm_TRGr480Q.png)

In the save function below, there are a few things happening. First, we’re defining a stringCopy variable, and a lcKey property on $scope.formData. Because localStorage (lc) only works with strings, we need to have a string key and a string value. The **key** can be any unique identifier — in this case, I’m using the timestamp. The **value** is the stringified copy of the submitted formData object.

<iframe src="https://medium.com/media/5e46e35af92badbdb50213c70197afcf" frameborder=0></iframe>

It’s nice to have some validation built in when working with JSON.parse and JSON.stringify. When parsing stringified JSON, if it is not valid JSON, it will throw an exception. You can avoid these code breaking issues by using try-catch block and handling the error.

    stringCopy = JSON.stringify($scope.formData);

This will take the formData object below:

    {
      beakColor: "black",
      commonName: "blue bird",
      featherColor: "blue",
      size: "small"
    }

and turn it into this:

    '{"commonName":"blue bird","size":"small","beakColor":"black","featherColor":"blue"}'

Next, we set this in localStorage, with the timestamp as the key. It should look like this:

![](https://cdn-images-1.medium.com/max/2000/1*uUTF4-TroPFeOc3FX22UUA.png)

Congratulations, you’ve saved your first offline record. LocalStorage does not expire, and will persist as long as you don’t clear it (ex. by clearing cookies, or typing localStorage.clear();).

### Parsing localStorage and saving to server

After saving a few more records, and returning from our bird watching adventure, we’ll want to sync this to the database and clear up our localStorage. We used JSON.stringify to put the data into localStorage, and now we’ll use JSON.parse to bring it back.

First, we need to add a second button to handle syncing the locally saved data to the server:

<iframe src="https://medium.com/media/1279407d2cedd333d80dcb49b49ffb20" frameborder=0></iframe>

Next, there’s a built in window.navigator object that contains an onLine property that is true if you are connected. In the example, we’ll just check this before submitting.
> If you want your application to automatically be checking for a connection and syncing automatically, you could put this check in an Angular $watch.

<iframe src="https://medium.com/media/8968d374d1b45640f1fdfc98fa8329f0" frameborder=0></iframe>

In the above **fetchAll** function, we’re converting the localStorage stringified records into an array of formData objects. We’ll call this function below, in the **submit** function.

<iframe src="https://medium.com/media/d5d6f6aea39c36859f4b079c04daaa72" frameborder=0></iframe>

After checking to make sure there’s a connection, we’re looping through all of the records in the array and submitting them individually. We do this because if one fails, it still continues to the next record. If it is successful, it is removed from localStorage to make room for new form entries. If it fails, the record will remain in localStorage. This allows for data persistence.

The final full files should look like this:

<iframe src="https://medium.com/media/5287f6c53e0bc46690c50028bc595863" frameborder=0></iframe>

<iframe src="https://medium.com/media/c389e448343b3f02ed805a526c70cde7" frameborder=0></iframe>

This is a very basic form, and I know these can get pretty complicated. I recommend added as much data validation and visual alerts as you can. For example, if two of the POSTs are successful, but one is not, let the user know with easy to understand messages. They can try to resubmit the form, or move on. The key is to not lose any data, and also to know where your records are stored at any given moment.

### Conclusion

In summary, we took a basic form, converted it to localStorage key-value pairs, and then parsed it back to JSON and submitted it to a service once a connection was detected.

Thanks for listening! This is part of a series I’m doing on my [acoma-data-collection](https://github.com/kauffmanes/acoma-data-app) app. Check back soon for more.

[Personal Portfolio](http://intrepidem.net/#!/)
