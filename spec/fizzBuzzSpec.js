describe ('FizzBuuzz',function(){
    fizzBuzz = new FizzBuzz()
    it ('is divisable by 3 and should return fizz',function(){
    expect(fizzBuzz.play(3)).toEqual('fizz')
    })
    it ('is divisable by 5 and should return buzz',function(){
        expect(fizzBuzz.play(5)).toEqual('buzz')
    } )
    it ('is divisable by 15 and should return fizzbuzz',function(){
        expect(fizzBuzz.play(15)).toEqual('fizzbuzz')
    })
    it ('is not divisable by either 3,5 or 15', function(){
        expect(fizzBuzz.play(1)).toEqual(1)
    })
})