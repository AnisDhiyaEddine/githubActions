const axios = require('axios')

test('hello hello', async () => {
   try {
       if(process.env.ok == "bae") console.log("Oops got you");
       let response = await axios.get(process.env.SERVER_1);
       expect(response.data).toBe("server-1")
       response = await axios.get(process.env.SERVER_2);
       expect(response.data).toBe("server-2")
   } catch (error) {
       console.error(error);
   }
})