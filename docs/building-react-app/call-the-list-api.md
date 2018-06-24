### **Call the List API**
Now that we have our basic homepage set up, let’s make the API call to render our list of notes.

#### Make the Request
Add the following below the constructor block in src/containers/Home.js.

```
async componentDidMount() {
  if (!this.props.isAuthenticated) {
    return;
  }

  try {
    const notes = await this.notes();
    this.setState({ notes });
  } catch (e) {
    alert(e);
  }

  this.setState({ isLoading: false });
}

notes() {
  return API.get("notes", "/notes");
}
```

And include our Amplify API module in the header.

```
import { API } from "aws-amplify";
```

All this does, is make a GET request to /notes on componentDidMount and puts the results in the notes object in the state.

Now let’s render the results.

#### Render the List
Replace our renderNotesList placeholder method with the following.

```
renderNotesList(notes) {
  return [{}].concat(notes).map(
    (note, i) =>
      i !== 0
        ? <ListGroupItem
            key={note.noteId}
            href={`/notes/${note.noteId}`}
            onClick={this.handleNoteClick}
            header={note.content.trim().split("\n")[0]}
          >
            {"Created: " + new Date(note.createdAt).toLocaleString()}
          </ListGroupItem>
        : <ListGroupItem
            key="new"
            href="/notes/new"
            onClick={this.handleNoteClick}
          >
            <h4>
              <b>{"\uFF0B"}</b> Create a new note
            </h4>
          </ListGroupItem>
  );
}

handleNoteClick = event => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute("href"));
}
```

And include the ListGroupItem in the header so that our react-bootstrap import looks like so.

```
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
```

The code above does a few things.

1. It always renders a Create a new note button as the first item in the list (even if the list is empty). We do this by concatenating an array with an empty object with our notes array.
2. We render the first line of each note as the ListGroupItem header by doing note.content.trim().split('\n')[0].
3. And onClick for each of the list items we navigate to their respective pages.

Let’s also add a couple of styles to our src/containers/Home.css.

```
.Home .notes h4 {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  overflow: hidden;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.Home .notes p {
  color: #666;
}
```

Now head over to your browser and you should see your list displayed.

![Homepage list loaded screenshot](https://d33wubrfki0l68.cloudfront.net/d46dceb97dafcfe109a604ca6c3c2f50d00a5cf4/e22d5/assets/homepage-list-loaded.png)

And if you click on the links they should take you to their respective pages.

Next up we are going to allow users to view and edit their notes.


[[Back]](https://github.com/eksant/serverless-react-aws)
