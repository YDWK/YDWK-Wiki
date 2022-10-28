---
keywords:

- Installation
- Download
- maven
- gradle
---

[![Maven Central](https://maven-badges.herokuapp.com/maven-central/io.github.realyusufismail/ydwk/badge.svg)](https://maven-badges.herokuapp.com/maven-central/io.github.realyusufismail/ydwk)

# How to install

The recommended way to install YDWK is through Gradle or Maven. You can also download the latest version from
the [releases page](https://search.maven.org/artifact/io.github.realyusufismail/ydwk/).

## :package: YDWK Dependency

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






