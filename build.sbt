name := """juster"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"

// Dependencies
libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.5.0",
  "org.webjars.bower" % "compass-mixins" % "1.0.2",
  "org.webjars" % "foundation" % "6.2.3",
  "org.webjars" % "jquery" % "2.2.4",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
)

dependencyOverrides += "org.webjars" % "jquery" % "2.2.4"
