function Message() {
    // JSX: Javascript XML. Can try on https://babeljs.io/
    const name = 'Kiwi';
    if (name) {
        return <h1>Hello {name}</h1>
    }
    return <h1>Hello World</h1>
}

export default Message;
