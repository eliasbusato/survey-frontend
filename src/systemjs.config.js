(function (global) {
  System.config({    
    map: {
      'app': 'app',
      '@angular/core': 'assets/js/core.umd.js',
      '@angular/common': 'assets/js/common.umd.js',
      '@angular/compiler': 'assets/js/compiler.umd.js',
      '@angular/platform-browser': 'assets/js/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'assets/js/platform-browser-dynamic.umd.js',
      '@angular/http': 'assets/js/http.umd.js',
      '@angular/router': 'assets/js/router.umd.js',
      '@angular/forms': 'assets/js/forms.umd.js',
      'rxjs': 'assets/js/rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);