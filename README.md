# Building APK from a react-native project
 <br />
* Generate a keystore <br />
- keytool -genkey -v -keystore your_key_name.keystore -alias your_key_alias -keyalg RSA -keysize 2048 -validity 10000
 <br />
* Add it to your project <br />
- Firstly, you need to copy the file your_key_name.keystore and paste it under the android/app directory in your React Native project folder.
 <br />
- You need to open your android\app\build.gradle file and add the keystore configuration. There are two ways of configuring the project with keystore. <br />
android { <br />
.... <br />
  signingConfigs {  <br />
    release { <br />
      storeFile file('your_key_name.keystore') <br />
      storePassword 'your_key_store_password' <br />
      keyAlias 'your_key_alias' <br />
      keyPassword 'your_key_file_alias_password' <br />
    } <br />
  } <br />
  buildTypes { <br />
    release { <br />
      .... <br />
      signingConfig signingConfigs.release <br />
    } <br />
  } <br />
 <br />
* Release APK generation <br />
- cd android
- ./gradlew assembleRelease
 <br />
 
 To perform a clean build <br/>
 cd android
./gradlew clean && ./gradlew assembleRelease
As a result, the APK creation process is done. You can find the generated APK at android/app/build/outputs/apk/app-release.apk. This is the actual app, which you can send to your phone or upload to the Google Play Store.
