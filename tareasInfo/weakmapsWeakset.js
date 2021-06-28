let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let weakset=new WeakSet()
  weakset.add(messages[0]);
  weakset.add(messages[1]);
  
  weakset.add(messages[0]);
 
  messages.shift();


  let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  let weakmap=new WeakMap();
  weakmap.set(messages[0],"dato cuando se leyo")
