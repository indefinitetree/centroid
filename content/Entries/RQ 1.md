---
entry number: "5"
title: RQ 1
date: 2025-11-28
tags:
summary: Just a random math problem I made
status: done
---
---
RQ - Random Question. This is the start of multiple upcoming entries consisting of random problems I created myself for fun. Some of them are just straightforward annoying, but I do think that some of the questions have a really cool solution and I want to put those out here. Have fun!

---
### <span style="color:#8bd952">Question</span>

Let $f:\left[\frac{1}{2}, 1 \right] \rightarrow [0 , 2]$ be a function such that 
$$f(x) = 4x^3 - 3x + 1$$
Let $g$ be the inverse function of $f$ . Then the value of $g \left( \frac{1}{\sqrt{2}} + 1 \right)$ is (use $\sqrt{3} = 1.7 ,\sqrt{2} = 1.4$ )


> [!Hint]-  
> Trigonometry ftw

>[!Answer]-
>Let $x = \cos \theta$ . The question is practically done at this step. Regardless, lets complete it. Substituting this in $f$, we get 
>
>$$f(x) = 4\cos^3 \theta - 3 \cos \theta + 1 $$
>
>$$ \implies f(x) = \cos 3 \theta + 1$$
>
>Therefore, in terms of the parameter $\theta$ , $f$ can be defined as $x = \cos \theta , y = \cos 3 \theta +1$ . Therefore, the parametric form of the inverse function would be
>
>$$( x = 3 \cos \theta + 1 , y = \cos \theta)$$
>
>$$ \implies g(x) = \cos \left(\dfrac{1}{3} \arccos(x-1) \right) $$
>
>Here it is worthy to note the domain and range of the functions involved so that to confirm the values of $\theta$ possible. Since $x \in [0.5  , 1]$ , $\theta \in [0 , \pi/3]$. 
>
>For $\theta \in [0 , \pi/3]$ , range of $f$ is $[0,2]$ and thus the codomain matches with the range now, which makes it invertible. Also notice that $\arccos(x-1)$ should take principal values i.e., $[0 , \pi]$.
>
>Now, $g \left( \frac{1}{\sqrt{2}} + 1 \right) = \cos \left(\dfrac{1}{3} \arccos\left(\dfrac{1}{\sqrt{2}}\right) \right)$ . Also, from $\cos \theta = \sqrt{\dfrac{1 + \cos 2 \theta}{2}}$ , we have 
>
>$$g \left( \frac{1}{\sqrt{2}} + 1 \right) = \cos \left(\dfrac{\pi}{12} \right) = \sqrt{\dfrac{2 + \sqrt{3}}{4}} = \dfrac{\sqrt{3} + 1}{2 \sqrt{2}} $$
>
>$$ = \dfrac{2.7}{2.8} = 0.964$$

---
### <span style="color:#8bd952">Summary</span>

Shortest entry so far. Nothing much to say. I really liked this trick because it somehow infuses the trigonometric domain with the normal functions and calculus domain. 

