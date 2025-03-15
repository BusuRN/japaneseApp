package com.japaneseapp

import android.os.Build
import android.os.Bundle
import org.devio.rn.splashscreen.SplashScreen
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.graphics.Color
import android.view.View
import android.view.Window
import android.content.pm.ActivityInfo

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
        val w: Window = window
        w.statusBarColor = Color.TRANSPARENT
        w.navigationBarColor = Color.TRANSPARENT
        w.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or View.SYSTEM_UI_FLAG_LAYOUT_STABLE

        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.O) {
            w.navigationBarColor = Color.parseColor("#50000000")
        } else {
            w.navigationBarColor = Color.TRANSPARENT
        }

        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.M) {
            w.statusBarColor = Color.parseColor("#50000000")
        } else {
            w.statusBarColor = Color.TRANSPARENT
        }

        SplashScreen.show(this)
        super.onCreate(null)
    }

    override fun getMainComponentName(): String = "japaneseApp"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
            DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
