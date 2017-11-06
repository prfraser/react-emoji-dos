## Challenges

1. Change Todo Item checkbox to instead use emoji '✅' '❎'
2. Split the todo items into two groups: completed and incompleted
  - Hint: first create two functions `filterCompletedItems` and `filterIncompletedItems`, then use them with `.map` in the `render()` method
3. Make todo item description editable
  - Hint: create a `onChangeItemDescriptionAtIndex(index, description)` method in your `App`
  - Hint: the `onChange` prop of a `<input>` will be called as a function with passed `event`. You can get the description using `event.target.value`

## Info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
