# react-pll 

[<img src="https://github.com/abranhe/programming-languages-logos/blob/master/src/programming-languages.gif?raw=true" align="right" width="100">](https://languages.abranhe.com)

[![gh](https://github.com/abranhe/react-pll/workflows/build/badge.svg)](https://github.com/abranhe/react-pll/actions)
[![travis](https://img.shields.io/travis/abranhe/react-pll)](https://travis-ci.org/abranhe/react-pll)
[![license](https://img.shields.io/github/license/abranhe/react-pll.svg)](https://github.com/abranhe/react-pll/blob/master/license)
[![npm](https://img.shields.io/npm/v/react-pll.svg?logo=npm)](https://github.com/abranhe/react-pll)

> A React component for [programming-languages-logos](https://github.com/abranhe/programming-languages-logos)

- [Install](#install)
- [Usage](#usage)
- [Props](#props)
- [Related](#related)
- [License](#license)

## Install

```
$ npm install react-pll
```

<details>
<summary>
  Other options?
</summary>

###### ⚠️ DEPRECATED

```
$ npm install @programming-languages-logos@react
```
</details>

Using [Github Registry](https://github.com/features/packages)?

```js
$ npm install abranhe@react-pll
```

## Usage

```
import React from 'react';
import Pll from 'react-pll'

export default () => {
  return(
    <Pll
      alt="Python Logo"
      height={30}
      language="python"
    />
  );
};
```

## Props

A cheatsheet of all available props.

|Prop    |Type      |Default|Description|
|:------ |:-------- |:----- |:--------- |
|language|`string`  |`cpp`  |The programming language logo|
|fallback|`any|node`|`null` |Optional fallback tha renders if the given language doesn't exist|

You can also add all image regular images props.

###### Example:

```
<Pll language="swift" alt="The Swift Logo">
```

### Related

- [programming-languages-logos](https://github.com/abranhe/programming-languages-logos): High Resolution Programming Languages Logos.

## License

MIT © [Carlos Abraham](https://github.com/abranhe)