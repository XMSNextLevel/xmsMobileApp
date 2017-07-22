## Install instructions

*You need to install the latest nodeJs from*.  [Nodejs website](https://nodejs.org/en/download/).
*You need to install the latest xcode from*.  [Xcode](https://itunes.apple.com/us/app/xcode/id497799835).
*You need to install the latest Android SDK from*.  [Android](https://developer.android.com/studio/index.html#downloads).

### Install ionic and cordova then install the libraries and dependecies:

```bash
$ sudo npm install -g ionic cordova
$ cd mobile-servicing
$ npm install
```

Then, to add platfoms

```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

for development:

```bash
$ ionic serve
```

for debugging native codes
```bash
$ cordova run {platform}
```

Substitute ios for android if not on a Mac.
