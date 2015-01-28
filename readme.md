# Brexpressions

Grammar and parser for Breezy's expressions in brackets.

[![Travis build status](http://img.shields.io/travis/daffl/brexpressions/master.svg?style=flat)](https://travis-ci.org/daffl/brexpressions)

## Expressions

Breezy uses expressions as placeholders that will be substituted with the value when rendered. Expression are very similar to JavaScript property lookups and function calls with the tenary operator. A full expression looks like:

    path[.to.method] [args... ] [? truthy] [: falsy]

`path` is either a direct or dot-separated nested property lookup. `args` can be any number of (whitespace separated) parameters if the result of the path lookup is a function. Each parameter can either be another path or a sinlge- or doublequoted string. The optional truthy and falsy block can be used to change the return value to another value or string.

Examples:

- Look up the `name` property:
    - `name`
- Look up `site` and get the `title`:
    - `site.title`
- Get `name` and call the `toUpperCase` string method:
    - `name.toUpperCase`
- Call the `helpers.equal` method to check the name against a string:
    - `helpers.equal name 'David'`
- Call `helpers.equal` method and return `Yes` if it matches (`null` otherwise):
    - `helpers.equal name 'David' ? 'Yes'`
- Call `helpers.equal` method and return `No` if it does not match (`null` otherwise):
    - `helpers.equal name 'David' : 'No'`
- Call `helpers.equal` method and return `Yes` if and `No` if it does not match:
    - `helpers.equal name 'David' ? 'Yes' : 'No'`

`helpers.equal` simply looks like:

```js
{
  helpers: {
    equal: function(first, second) {
      return first === second;
    }
  }
}
```

Expressions can be used in [Attributes](#breezy-attributes) or any other text when wrapped with double curly braces `{{}}`:

```html
<div show-if="helpers.equal name 'David'">Hi {{name.toUpperCase}} how are you?</div>
<img src="person.png" alt="This person is: {{helpers.equal name 'David' ? 'Dave' : 'I don\'t know'}}">
```

__Note:__ Dynamically adding attributes like `<img {{helpers.equal name 'David' ? 'alt="This is David"'}}>` is currently not supported. This can almost always be done in a more HTML-y way, anyway, for example using a *custom attribute*.
