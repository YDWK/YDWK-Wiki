[![Maven Central](https://maven-badges.herokuapp.com/maven-central/io.github.realyusufismail/ydwk/badge.svg)](https://maven-badges.herokuapp.com/maven-central/io.github.realyusufismail/ydwk)

# How to install

## Installing the library

To install YDWK you will need to be using gradle as this a kotlin library not intended for java.

### Gradle Kotlin DSL

```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("io.github.realyusufismail:ydwk:${project.version}")
}
```

### Gradle Groovy DSL

```groovy
repositories {
    mavenCentral()
}

dependencies {
    implementation "io.github.realyusufismail:ydwk:${project.version}"
}
```


