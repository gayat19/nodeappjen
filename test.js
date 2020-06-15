var assert = require('assert')

function test(){
	assert.equals(10+2,12);
}

if(module == require.main)
	require('test').run(test);