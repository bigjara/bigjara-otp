const chai = require("chai") 
const otp  = require("../")

const assert = chai.assert 

describe("Test suite for otp" , () => { 
    before(function(){
        console.log(otp.generateOTP(10))
    })
    beforeEach(function(){
        console.log("About to start running the test")
    }) 

    describe("Test the otp" , () => {
        it("should return the OTP according to the specified length" , () => {
            assert.equal(10 , String(otp.generateOTP(10)).length)
        })
    })
})
