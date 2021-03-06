# cine.io Peer Example Application Node.js

This is an example application in Node.js showing the capabilities of [cine.io peer][cineio-peer]. It uses the [cine.io Peer JS SDK][cineio-peer-js-sdk] and the [cine.io Node.js package][cineio-node].

## Run Locally

1. Sign up for your own API key at [cine.io][cineio].
1. Set up your environment:

    ```term
    $ export CINE_IO_PUBLIC_KEY='<your cine.io project public key>'
    $ export CINE_IO_SECRET_KEY='<your cine.io project secret key>'
    ```

1. install your packages:
    ```term
    $ npm install
    ```

1. Run the server:
    ```term
    $ node index.js
    ```

## Try it on Heroku

Click the button below to magically deploy up this example to your Heroku account. A [cine.io][cineio] plan will automatically be included for free.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/cine-io/cineio-peer-node-example-app)

<!-- external links -->
[cineio]:https://www.cine.io/
[cineio-peer]:https://www.cine.io/products/peer
[cineio-node]:https://github.com/cine-io/cineio-node
[cineio-peer-js-sdk]:https://github.com/cine-io/peer-js-sdk
