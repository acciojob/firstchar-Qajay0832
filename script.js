function firstChar(text) {
	text=text.trim()
	if (text==""){
		return ""
	}
	else{
		return text.charAt(0)
	}
  // your code here
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
