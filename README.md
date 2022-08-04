# Student-Contract-deploy-send-get-transaction-using-Hardhat
<h1>1. Setting up the environment</h1>
Most Ethereum libraries and tools are written in JavaScript, and so is <b>Hardhat.</b> If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and <b>Hardhat.</b> is built on top of it.
<h3>Installing</h3>
<pre> <code> npm i </code> </pre>


<h3>Update your .env file accordingly</h3>
<pre><code>INFURA_API_URL=""
PRIVATE_KEY=""
CONTRACT_ADDRESS=""</code></pre>

<h3>Compiling contracts</h3>

To compile the contract run <code>npx hardhat compile</code> in your terminal. The compile task is one of the built-in tasks.


<pre><code>$ npx hardhat compile
Compiling 1 file with 0.7.3
Compilation finished successfully</code></pre>


<h3>Deploying contracts</h3>

The contract has been successfully compiled and is ready to be used.

Now, deploy this contract to rinkeby testnet. Run the deployment script deploy.js present in the scripts folder, using following command:
<pre><code>$ npx hardhat run scripts/deploy.js
Contract deployed successfully</code></pre>


<h3>Use existing .env files for both scripts</h3>


Add your CONTRACT_ABI in both scripts file

<h3>Sending transaction to blockchain</h3>


Send the transaction using ether-js. Run the node-js script sendTransaction.js present in the scripts folder, using following command:

<pre><code>$ node sendTransaction.js 
Tx is Successfull</code></pre>

<h3>Getting transaction from blockchain</h3>

Get the transaction using ether-js. Run the node-js script getTransaction.js present in the scripts folder, using following command:

<pre> <code>$ node getTransaction.js</code> </pre>

