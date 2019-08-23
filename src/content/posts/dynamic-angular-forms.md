---
title: Dynamic Angular Forms
date: "2019-08-15"
path: /writing/dynamic-angular-forms
---

Reducing redundancy and maintaining optimal laziness

![](https://cdn-images-1.medium.com/max/3840/1*2p5P-9M-K4qfP01Mfmq37g.jpeg)

I’ve been spending a lot of time on [StackOverflow](https://stackoverflow.com) recently, answering Angular.js questions and earning some reputation and badges. I’ve been working through a problem with a developer that wants to create a dynamic form based on a service response containing the specifications for each input (original question can be found [here](https://stackoverflow.com/questions/45638907/dynamic-form-creation-in-angular-based-on-servers-response/45639507?noredirect=1#comment78317883_45639507)).

### Wait, what?

A dynamic form, in this case, means that your application is provided with a configuration of inputs, and the HTML for the form is generated based on that configuration. This allows your code to be reusable in two ways: in the creation of each input in a form, and between the forms of multiple clients or users.

### Fish and Birds

Let’s create a scenario where you’re building an application to collect data about animals. The first scientist is in the Amazon studying birds. A second scientist is at the Great Barrier Reef studying fish. You want to be able to use the same application to collect data, but the questions each scientist might use will probably be completely different.

If we want to make this form using static HTML, you’d need to make two — one tailored to birds, and one for fish. In the example below, you see the redundancy:

<iframe src="https://medium.com/media/a4351bef63df550445f49e46ab2f1e37" frameborder=0></iframe>

Each input has a corresponding label, input type, name, and ID. For each input, you need to retype the HTML for each input in this form, and then make a whole other form to handle the fish questions. If you want to make a change to an input, you’ll need to make it everywhere this form is used. This is where dynamic form creation is awesome.

In the case of the StackOverflow question, the form was generated based on a button click, that in turn called a service with a param that said which configuration should be returned, and then responded with the appropriate JSON. The key here is that the configuration DEFINED the structure of each input, and then the HTML input templates were created based on that.

An example of a bird form configuration as JSON could be:

<iframe src="https://medium.com/media/2ed1877916b435044572cce974d9aba0" frameborder=0></iframe>

To make the form dynamic, we’re going to loop through each of these inputs provided and build the template.

### The Loop

Angular.js comes with a handy built-in directive called [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat). It instantiates a template once per item in a collection. Our goal is to create the generic input template for each bird question.

The first step is to make sure that the configuration data is accessible to the scope of the template. In this basic example, we’ll do this by assigning it to a $scope.questions property in our controller.

<iframe src="https://medium.com/media/6b03c4864a4c3dc027e8c61564846830" frameborder=0></iframe>

Now the questions collection has been defined in scope, we can create a matching template using ng-repeat.

<iframe src="https://medium.com/media/0bec1ec2c172340cab184c4d84e423e3" frameborder=0></iframe>

It loops through each question, and dynamically updates each input with the value from the service response. It is generic enough that it can be used for both fish AND birds, simply by changing the configuration.

### Here’s an example of a possible flow for the scientist looking at birds:

1. See a cool bird you want to record info about

1. Go to the form page

1. Click the “New Bird Record” button. The form will populate with bird questions

1. Fill out the info, click submit

This process is the same for the scientist looking at fish, except they’d click the “New Fish Record” button. It uses the same HTML, the same JavaScript, calling the same service — just with a different parameter.

You don’t need to populate that form type via a button. You could pull it from the URL as a route or state parameter. You could have it defined in the scientist profile or settings. You could select it from a drop-down. It all depends on your application.

### Form Submission

Generating the form dynamically is all well and good, but how do you actually get the data from each input into a submit function? With a normal Angular form, we use ngModel with a unique model name, like <input type="text" data-ng-model="formData['birdName']">. We can still do this dynamically. I usually create a property in my controller called $scope.formData = {} to hold all of my form values. Then, when looping through the form, I add a property based on the ID (or something equally unique) of the question.

<iframe src="https://medium.com/media/649cab7ce6f82784f669e555a0ce3c7f" frameborder=0></iframe>

The item.id is coming directly from the JSON response. If the ID for this particular input is “eggColor” and you’ve typed in “blue”, then the $scope.formData object now looks like this: { "eggColor": "blue" }. Now, when you submit the form, you can make a service call to handle your submission, and pass along your $scope.formData .

<iframe src="https://medium.com/media/67145cda90418ce64162adfca48eb756" frameborder=0></iframe>

## In Conclusion

This is a VERY simple example that attempts to make sense of a more complicated concept. If all you were dealing with were checkboxes and text inputs, this would work perfectly. However, this doesn’t account for textareas, radio buttons, or select buttons. This is still very possible, but involves a little more work. I have done some of this work as part of my [Acoma data collection app](https://github.com/kauffmanes/acoma-data-app/blob/master/public/components/newFindQuestion/question.html), so if you’re working on a form with many inputs, check that out! Feel free to fork it, add an issue, or contact me with questions.
