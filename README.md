# patch-react-array-of-objects

The display of the update and new items forms works based on the dessertId that is set in the parent state. It is originally set to `null` and is updated when the edit button is clicked on the `ItemCard` using the `handleEditDessertClick` callback function. (Inverse Data flow)

In the `renderForm`, there is an if statement that returns the correct form based on if there is a `dessertId` set.

## Deliverables

- In the Edit Desert form (on mount), we will need to fetch the correct dessert data based on the `dessertId` that is passed as props from the parent. We will want to execute this same fetch if the `dessertId` ever changes.
- Overwrite the state for the controlled form to populate the data in the form. The dessert's name, image, description, and cakeType should all be set initially to empty strings.
- Create the form to edit any of the above mentioned properties.
    ```HTML
     <form >
        <h2>Edit Dessert</h2>
        <label htmlFor="name">Name</label>
        <input
          className="edit-input"
          name="name"
          id="name"
          type="text"
        />
        <label htmlFor="image">Image</label>
        <input
          className="edit-input"
          name="image"
          id="image"
          type="text"
        />
        <label htmlFor="description">Description</label>
        <input
          className="edit-input"
          name="description"
          id="description"
          type="text"
        />
        <label htmlFor="cake-type">Cake Type</label>
        <input
          className="edit-input"
          name="cakeType"
          id="cake-type"
          type="text"
        />
        <input type="submit" />
      </form>
    ```
- Add onChange and value props to each of the inputs to control them
- Create an onChange handler that 
    - Copies the current state
    - updates the copy using the target.name and value
    - updates the controlled form state.
- Add a form submit handler that:
    - prevents default
    - builds patch options object for fetch
    - sends fetch
    - passes updated dessert object from server back to parent where the desserts array is updated.
    - reset form state


