let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log("######## original arrays ########");
console.log(secretMessage);
console.log("######## Method arrays ########");
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push("to", "program");
secretMessage.splice(7, 1, "right");
secretMessage.shift(0);
secretMessage.unshift(0, "Programming");
secretMessage.splice(7, 5, "know");
console.log(secretMessage);
console.log("######## secret message ########");
console.log(secretMessage.join(""));
