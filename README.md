**`npm start` to serve front end to local server**

The content for this pre sale will need to be changed manually. In order to do this, the sections below indicate the file and line numbers the custom content can be found at.

**Custom Message**: can be found in **Panel.jsx**, line: **183**, between the **<MessageBanner>** tags

**Active Members**: can be found in **Panel.jsx**, line: **195**, between **<Pill>** tag (Be sure NOT to delete the ‘i’)

**Current Round**: can be found in **Panel.jsx**, line: **205**, between **<Pill>** tag (Be sure NOT to delete the ‘i’)

**Total Raised**: can be found in **Panel.jsx**, line: **214**, between **<Pill>** tag (Be sure NOT to delete the ‘i’)

================================================================

In order to hook up purchase buttons, the calls would need to be added to respective buttons, which can be found at the following places

**Coinbase button**: Lines **367**-**369**, **<Button>** tag
**Stripe button**: Lines **373**-**375**, **<Button>** tag

================================================================

I have included the blue background for the sake of vanity when Simon demo’s this. If embedding just the maroon box, you will need to comment out the associated component **<Container>** tags, which can be found on lines **180** & **395**.
