# Installation

1. Install extension from `/app`
2. Copy its ID to manifest `host/com.vk.control.json`
3. Change path to host (`host/my_host.js`) in manifest `host/com.vk.control.json`
4. Change node paths in `host/my_host.js`
5. Install manifest by running `./host/register.sh` (check paths first)
6. Restart extension in `chrome://extensions`
7. Open `vk.com`

# Usage

``` sh
$ curl localhost:9615/get_current_song
$ curl localhost:9615/play
$ curl localhost:9615/next
$ curl localhost:9615/prev
```
