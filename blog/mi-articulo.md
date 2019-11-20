---
title: Diseña y programa responsive Skeleton Screens
author: David Sierra
date: 1 Mayo 2019
id: 'design-and-code-skeletons-screens'
description: |
  Aprenderás a diseñar un Skeleton Screen pensando en su asincronometría y programarlo en base a modos de opacidad de Sketch o Photoshop.
---

## ¿Qué son las Skeleton Screens?

Seguramente Facebook o Linkedin han sido los principales impulsores de los llamados Skeleton Screens. Solo tienes que entrar con tu cuenta de usuario y verás una barras que se mueven y que dan la sensación de que el contenido está cargándose.

Las Skeleton Screens sirven para mostrar contenido instantáneo antes de tener el contenido final que cargamos de <strong>forma asíncrona</strong>.
¿Asíncrona? ¿qué es eso?
Contenido asíncrono es todo el contenido que tenemos que "esperar" a que se carge habiendo un retraso temporal. La gran mayoría de los casos es contenido que viene de una petición a un servidor (a través de las famosas APIs) y que esperamos desde el front-end recibirlo pero no sabemos cuándo y eso no impide que se pueda mostrar el resto de la página. Escribiré más sobre ello en otro post, por ahora es importante simplemente saber que <strong>el contenido asíncrono es el que no se carga instantáneamente, sino que tenemos que esperar para obtenerlo</strong>.
