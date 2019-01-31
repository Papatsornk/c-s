let stdin = process.openStdin()
var a

var multiplication = function() {
	console.log('Enter Your Number : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		for(let i=1 ; i<= 12 ; i++){
			a = value
			console.log(a + "x" + i + "=" + (a*i))
			stdin.destroy()
		}	
	
	})
}
module.exports.multiplication = multiplication;




