# Online Surveys
Ah yes. Big Data. That super awesome buzz word.

But how do we get big data? WELL, we *SPAM THE HELL OUT OF PEOPLE*

Yes. That's right. We send a ton of emails asking them to give us details about
their life without any reason other than we've asked them to. Because privilege.

But seriously, it can be useful to send surveys; so let's make an app for that.

## Minimum Viable Product

*These are the first features to finish. They should be deployed and working
on Heroku before beginning any additional work. Each feature must have tests and
be accessible from the UI.*

* Guest may register as Surveyor
* Surveyor may create Survey
* Surveyor may not create survey with empty title
* Surveyor may create Survey with Plain Text Questions
* Surveyor may not create survey with no questions
* Surveyor may not create question without a title
* Guest may respond to a Survey they have been linked to
* Surveyor may see individual responses to a survey

## Hard Mode Features

*Hey! These are kinda difficult! However, we think it's worth trying to achieve
at least a few of these on your project. They'll seriously push your
understanding of how to build webapps in Ruby*

* Surveyor may email a survey to a Responder
* Surveyor may create a survey with images for questions
* Surveyor may see sentiment analysis for aggregate survey responses.
* Aggregate Survey Reponses must still work quickly with 10,000 responses to a
  survey

## Additional Features
* Surveyor may mark questions as required
* Responder may not save response that is missing answers to required questions
* Surveys are accessible via short urls
* Surveyor may create Multiple Choice question
* Surveyor must provide at least 1 choice for a Multiple choice question
* Responder may respond to a Multiple choice question
* Surveyor may create Paragraph Questions
* Survey question order is randomly generated
* Responder may respond to Paragraph Questions
* Surveyor may see responses to surveys in aggregate
* Surveyor may close responses for a survey
* Surveyor may set an expiration date/time for responding to a survey.
* Surveyor may mark survey as public
* Guest may see list of all public surveys
* Guest may respond to public surveys
* Guest may not respond to a survey more than once
