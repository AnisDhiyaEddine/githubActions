const axios = require('axios')

test('test', async () => {
   try {
       expect(process.env.Hello).toBe("bae");
      
   } catch (error) {
       console.error(error);
   }
})