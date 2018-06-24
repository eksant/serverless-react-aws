### **Display a Note**
Now that we have a listing of all the notes, let’s create a page that displays a note and let’s the user edit it.

The first thing we are going to need to do is load the note when our container loads. Just like what we did in the Home container. So let’s get started.

#### Add the Route
Let’s add a route for the note page that we are going to create.

Add the following line to src/Routes.js below our /notes/new route. We are using the AppliedRoute component that we created in the Add the session to the state chapter.

```
<AppliedRoute path="/notes/:id" exact component={Notes} props={childProps} />
```

This is important because we are going to be pattern matching to extract our note id from the URL.

By using the route path /notes/:id we are telling the router to send all matching routes to our component Notes. This will also end up matching the route /notes/new with an id of new. To ensure that doesn’t happen, we put our /notes/new route before the pattern matching one.

And include our component in the header.

```
import Notes from "./containers/Notes";
```

Of course this component doesn’t exist yet and we are going to create it now.

#### Add the Container
Create a new file src/containers/Notes.js and add the following.

```
import React, { Component } from "react";
import { API, Storage } from "aws-amplify";

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      note: null,
      content: "",
      attachmentURL: null
    };
  }

  async componentDidMount() {
    try {
      let attachmentURL;
      const note = await this.getNote();
      const { content, attachment } = note;

      if (attachment) {
        attachmentURL = await Storage.vault.get(attachment);
      }

      this.setState({
        note,
        content,
        attachmentURL
      });
    } catch (e) {
      alert(e);
    }
  }

  getNote() {
    return API.get("notes", `/notes/${this.props.match.params.id}`);
  }

  render() {
    return <div className="Notes"></div>;
  }
}
```

We are doing a couple of things here.

1. Load the note on componentDidMount and save it to the state. We get the id of our note from the URL using the props automatically passed to us by React-Router in this.props.match.params.id. The keyword id is a part of the pattern matching in our route (/notes/:id).
2. If there is an attachment, we use the key to get a secure link to the file we uploaded to S3. We then store this to the component’s state as attachmentURL.
3. The reason why we have the note object in the state along with the content and the attachmentURL is because we will be using this later when the user edits the note.

Now if you switch over to your browser and navigate to a note that we previously created, you’ll notice that the page renders an empty container.

![Empty notes page loaded screenshot](https://d33wubrfki0l68.cloudfront.net/7e805e32290774b64d0ab10e38c30370d63a7dc8/29a30/assets/empty-notes-page-loaded.png)

Next up, we are going to render the note we just loaded.


[[Back]](https://github.com/eksant/serverless-react-aws)
