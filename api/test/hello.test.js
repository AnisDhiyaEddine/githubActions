const axios = require('axios')

test('test', async () => {
   try {
       let response = await axios.get(process.env.SERVER_1);
       expect(response.data).toBe("server-1")
       response = await axios.get(process.env.SERVER_2);
       expect(response.data).toBe("server-2")
   } catch (error) {
       console.error(error);
   }
})