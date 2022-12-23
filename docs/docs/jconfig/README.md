---
permalink: /docs/jconfig
keywords:
- JConfig
- Json
---

[![Maven Central](https://maven-badges.herokuapp.com/maven-central/io.github.realyusufismail/jconfig/badge.svg)](https://maven-badges.herokuapp.com/maven-central/io.github.realyusufismail/jconfig)

# Getting started with JConfig

## What is JConfig?

JConfig is a library that allows you to set and get values from a config file. It is built to be simple and easy to use.

It uses a json file to store the values and the default config file is called `config.json`. This can be changed which
will be explained later.

## Installation

The recommended way to install Jconfig is through Gradle or Maven. You can also download the latest version from
the [releases page](https://search.maven.org/artifact/io.github.realyusufismail/jconfig/).

## :package: JConfig Dependency

<CodeGroup>
  <CodeGroupItem title="Gradle Groovy DSL" active>

```groovy
repositories {
    mavenCentral()
}
dependencies {
    implementation "io.github.realyusufismail:jconfig:${project.version}"
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Gradle Kotlin DSL">

```kotlin
repositories {
    mavenCentral()
}
dependencies {
    implementation("io.github.realyusufismail:jconfig:${project.version}")
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Maven">

```xml
<dependency>
    <groupId>io.github.realyusufismail</groupId>
    <artifactId>jconfig</artifactId>
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
    implementation "io.github.realyusufismail:jconfig:${latest-snapshot-version}"
}
```

  </CodeGroupItem>
  <CodeGroupItem title="Gradle Kotlin DSL">

```kotlin
repositories {
    maven("https://s01.oss.sonatype.org/content/repositories/snapshots/")
}
dependencies {
    implementation("io.github.realyusufismail:jconfig:${latest-snapshot-version}")
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
    <artifactId>jconfig</artifactId>
    <version>${latest-snapshot-version}</version>
<type>pom</type>
</dependency>
```

 </CodeGroupItem>
</CodeGroup>

## Usage

see [Usage](/wiki/jconfig/usage)


