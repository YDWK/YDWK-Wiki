---
home: true
heroImage: /ydwk-s.png
heroText: null
tagline: An easy-to-use discord wrapper made in kotlin
actions:
- text: View Docs →
  link: /docs/
  type: primary
---

## :bulb: About YDWK

It is a discord wrapper made in kotlin that aims to be as simple and as fast as possible while still being easy to use and understand. 
It is built to be similar to discord.js but with some differences.
It tries to adhere to the [discord api](https://discord.com/developers/docs/intro) as much as possible. 

## :key: This api also comes with a library called JConfig

JConfig is library which allows you to set and get values from a config file. It is built to be simple and easy to use.

For more information, check out the special page for JConfig [here](/wiki/jconfig).

## :package: Installation
<CodeGroup>
  <CodeGroupItem title="Gradle Groovy DSL" active>

```groovy
repositories {
    mavenCentral()
}
dependencies {
    implementation "io.github.realyusufismail:ydwk:${project.version}"
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Gradle Kotlin DSL">

```kotlin
repositories {
    mavenCentral()
}
dependencies {
    implementation("io.github.realyusufismail:ydwk:${project.version}")
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Maven">

```xml
<dependency>
    <groupId>io.github.realyusufismail</groupId>
    <artifactId>ydwk</artifactId>
    <version>${project.version}</version>
</dependency>
```
  </CodeGroupItem>
</CodeGroup>

::: details Click to see how to download the snapshot version

<CodeGroup>
  <CodeGroupItem title="Gradle Groovy DSL" active>

```groovy
repositories {
    maven {
        url = uri("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }
}
dependencies {
    implementation "io.github.realyusufismail:ydwk:${latest-snapshot-version}"
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Gradle Kotlin DSL">

```kotlin
repositories {
    maven("https://s01.oss.sonatype.org/content/repositories/snapshots/")
}
dependencies {
    implementation("io.github.realyusufismail:ydwk:${latest-snapshot-version}")
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Maven">

```xml
<repository>
    <id>snapshots-repo</id>
    <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>
</repository>
```

```xml
<dependency>
    <groupId>io.github.realyusufismail</groupId>
    <artifactId>ydwk</artifactId>
    <version>${latest-snapshot-version}</version>
<type>pom</type>
</dependency>
```

 </CodeGroupItem>
</CodeGroup>
