---
entry number: "4"
title: Fair Competitions
date: 2025-11-23
tags:
  - philosophy
  - yapping
summary: About competitions in general
status: done
---
---
_Does fair competitions exist?_  I asked myself while I was sitting through a class that was teaching about how to deal with failures. Before answering this question, we should first define the terms clearly. Moreover, a more fundamental question would be - _Can fair competitions exist (theoretically)?_ . If yes, then how it would look? If no, how could one make a competition as fair as possible? Is something called a _fair competition_ even possible practically or realistically? What about rationale and morale? What about fault tolerance? What about feasibility?

Lot of interesting questions, If someone else had all these questions and wanted to discuss, I would do anything, would travel countries to discuss in-person (Delusional). Nowadays, idk I just get excited for these type of conversations. I'm becoming more pathetic for such generalized philosophical conversations. 

---
### <span style="color:#8bd952">My Definitions</span>

Lets try to define things I guess. Why this much formalism? because I'm a computer science student who really likes mathematics as well (I know I can't be helped). Also, this makes it clear about my context, conventions and my opinions. And obviously, this is my blog and I have free will.

_Competition_ - Let's keep it simple, not much of controversy. A competition has many participants, each of them has the same predefined end goal. They achieve it by "competing" against other participants, directly or indirectly. In a competition, necessarily not all the participants are satisfied. It can have rules, which all the participants are "expected" to follow. 

_Fair Competition_ - A complex word indeed. Maybe because such a thing called fairness does not exist perfectly in the real world. Nevertheless, I'll give it a try to formalize - Let's start off simpler and then I'll try to build upon.

Consider a point in time, where a future participant for a competition, comes to know about the competition. At the same time, consider an _identical_  participant. At the first place, a fair competition in this scenario would let this _identical_ participant also get the same information about the competition at the same time. In other words, all the participants in some sense, get a fair chance for preparation. In my view, this doesn't exactly convert to equal preparation time in every case, since if the participants are different, then inherently the preparation times should also be different. But for identical participants, this should work. 

I'll quickly glance over other properties. Consider the previous property and assuming all participants are identical, during the competition, the participants should be exposed to the same/identical scenarios. In other words, if I switch two random participants at the start of the competition, they shouldn't be able to differentiate between their previous scenario and the current scenario (symmetry). The scenarios could be different after the competition has started based on the participant's performance.

When it comes to reward, the penalty from the reward should be relative to the performance. Let's remove rewards for now. It doesn't really matter as long as it doesn't affect the way the competition proceeds. For now, let's assume that every participant gets some reward proportional to their performance. 

--- 
### <span style="color:#8bd952">Can fair competitions exist?</span>

Talking about competitions in general is hard, lets focus on specific examples and then I'll try to generalize it for different situations and competitions. As someone who was obsessed with JEE during my high school, let's take that as an example. It is a good example in my opinion because it involves a lot of things and factors to be considered.  Another good example would be chess tournaments, which I would also glance over as well.

#### <span style="color:#78bff2">Case Study: JEE Advanced</span>

Let's take JEE Advanced. Students of age 17,18,19 mostly give this exam, maybe with few outliers. They compete against each other in an exam setting. This is an simpler exam to analyse the first property of the fair competition - Fair preparation scenario. This is independent of what actually happens when the exam starts, because once the exam starts, everyone is on their own, they are not competing directly and affecting each other's decision. 

Let's assume that the exam expects us to understand 11th and 12th PCM topics in full detail, and the topics are given in the syllabus. Obviously, if the exam asks us something outside of this, fairness is already over - this has happened several times, but its fine anyways. In some sense, this could still be fair since one can argue that everyone is getting the same question, but then there was a promise and also it becomes a game of chance - if you know you know type question. Then someone could argue - hey if they know that, then they deserve it? but then the competition never promised to reward it, so it shouldn't reward them? 

Let's keep things very simple - IITs are idealistic and they set the perfect paper, that no one can question. Every question is valid, no ambiguity, nothing. From outside perspective, this should be perfect enough for fair competition. Is it fair though?

##### <span style="color:#7788f0">Fair Preparation:</span>
Coming to the fair preparation - Everyone is given equal time in this scenario (???) . Ok, some of them get to know about the competition earlier and start their preparation earlier, and some don't get the information. Maybe if give enough time, we can just assume every parent knows about JEE and ultimately, lets assume they can transfer this information as soon as possible to their children (who might potentially write JEE). Okay, this sounds like fair. 

For simplicity, lets assume there is a rule that parents can let their child know that JEE exists only after 11th std. Now this means, every student who could potentially write JEE, now has exactly around 2 years for their preparation. But remember, the participants here are not identical - neither in terms of the situations they got exposed throughout their life nor in terms of their basic hardware (I mean, the underlying hardware (CS spam be like) - their inherent biological system). 

What does this imply is that, different participants might need different preparation times. Someone might need three years of preparation compared to someone else's one year of preparation. 

You could just say, hey if the competition rewards people who can learn fast or pick things up fast, then this should be fair right? Time becomes the absolute unit for reference and comparison now. Not so fair now as well, for a lot of reasons. 

Learning depends on lot of other stuff and surroundings - some people learn fast by competing, some learn fast alone. Some of them learn fast when taught well, some of them are self taught. Worst case - every individual person might have their own set of preferences for these things (teachers , surroundings etc.) to prepare at their optimum. Ok, let's say if we are somehow able to ensure this optimum is achieved by external setting up. Will that be fair then? Turns out, it might not be. 

##### <span style="color:#7788f0">Randomized fair competition</span>
So far, we've been _theoretically_  trying if a fair JEE Advanced could be conducted or not. So far, it doesn't look that promising, we have to relax a lot of factors. Let's try tweaking the definition of _fair competition_ to make it easier. Suppose, let's say the number of participants for such competition is $n$ . We'll define a randomized fair competition (I came up with this, don't mind me :) ) as competition that guarantees the following: 

_"Pick any subset of participants. The competition guarantees that it is fair for this subset of participants with a high probability (By high probability, we mean that the probability is something like $1 - \dfrac{1}{n^C}$ , where $C$ is some constant)."_

This now kinda makes sense, since we can't satisfy each participant practically and let's just say we are ok with most of the participants satisfied. Now we actually don't have to relax all those previous conditions discussed. We can just assume that those conditions ensure fairness with high probability. Ok, so is it now randomized fair competition? is this JEE a randomized fair competition?

It might not be the case sadly. In fact, this is something that is very prevalent in my opinion. Biologically, different people's brain activity reaches its peak at different times - some of them might be good at earlier stages, some of them might be good only at the later stages. Even if the competition rewards "inherently fast learning" participants, it could be the case that the participants are being tested at different timescales (in biological sense) - in other words, its like a 11th std student competing with a 9th std student. The activity is not even proportional - its just a sudden hike. 

This is not even randomized fairness according to the statistics - A lot of participants could attain their peak just after the exam. The competition actually wasn't symmetrical in that case and it actually rewarded the wrong people because of the way it was conducted. If you think about it, its the same difference between two participants, where one of them is a night owl and other one is just an early sleeper - and the exam is just on the night time, which is trying to test their understanding capacity - Obviously, the night owl would perform better. The difference is that the choice of being night owl/early sleeper is not something in the participants' hands. 

This kinda answers the more general question - in some sense, even with a lot of relaxed constraints, a theoretically fair competition is near impossible, due to randomness in this aspect. Can we atleast make it randomized fair? I think yes. For example, a small fix to the above solution is to allow a larger age range of people to participate - not only restricting it to 17,18,19 -> maybe extend it to 20-21 and 16 - this would actually cover most of the variations and one could say with high probability, all of the participants would have achieved their peak within this range and would have had fair preparation scenarios.

Ok cool, we have solved JEE then, right? Not currently, but overtime, we could assume that JEE is solved (in the context of randomized fair competition), if majority of the participants gets the fair preparation scenario. Now everything, that would happen during the exam is independent - any unlucky circumstances can be neglected as we are concerned about high probability - we can just assume that the centres provide ideal conditions for most of them (which sadly isn't?). Any other stuff - we can just say, hey you should have prepared for this, the exam also tests this indirectly. Yayy, JEE Advanced is now fair for everyone (ok most of them, or screw it, its fair for everyone with high probability).

Let's not go into cheating, moral stuff and blah blah - it would require another blog entry. but for an exam this should be good enough in my opinion. I would be willing to hear different opinions on this.

#### <span style="color:#78bff2">Extra yapping</span>

JEE Advanced is somewhat a simpler competition - everything is mostly dependent on the preparation scenario. What about something like a chess competition? The reward system is now different, players now influence each others' decisions actively - What about now? 

What is the difference though? Let's go with a chess game - for simplicity, lets say its the world championship and two players play against each other. The goal of the competition is just to find out who is the better player.

First of all, is a single match enough to determine the better player? is it fair? Obviously, no - the better player could just get unlucky and lose. But is it randomized fair? In other words, does the better player still have a high chance of winning over the other player? (I mean, you could say, hey that's how a better player could be defined?)

The problem is, this depends on the game's property itself. For example, one match of badminton is not equivalent to a single match of chess (I know nothing about badminton btw). But atleast as far as I know, chess is kinda brutal - It doesn't reward consistency but it punishes you heavily for not being consistent. One mistake and mostly all the advantage you have stacked so far in the game is gone. More brutal thing is such mistakes can be easily punished, though punishing such mistakes usually won't require considerable expertise when compared to not making such mistakes. In fact, this was the game changer in the chess world championship, where Ding just did a single brutal blunder and just gave the world championship to Gukesh. Not saying anything about the players themselves, but this a property of the game itself.

A equivalent way to think is having a MCQ paper with +1 for correct answer and -4 for a wrong answer. You could have an accuracy of 80% and still score 0 in the exam, regardless of how many correct answers you get. Someone who only attempted one correct question - which is very easy to do, would outperform you in that case.  The competition is not fair since it didn't reward the participants based on their relative performance in some sense. 

Coming to tournaments, there is something called rational behaviour, which I will save it for a later entry. Basically, the behaviour talks about how certain set of participants could like collaborate and come up with decisions that is unfavorable individually but favorable as a group. Let's keep it for some other day. Very interesting game theory topic.

---
### <span style="color:#8bd952">Summary</span>

First part of this blog entry, especially the JEE Advanced part - was one of my line of thoughts I had when I asked the question myself. At that time, I was thinking about the relevance of competitions, not really about the fairness of the competitions - Is competition a necessity, from a participants' point of view. Nevertheless, this was also a fun idea to think about it.  14k characters, so I shall stop this here. (Too much yappin)

### <span style="color:#8bd952">Post-Entry Clarity:</span>

So, first of all, some generalizations I have just thrown around which are completely based on my observations instead of backing up with a solid statistics/data. So, yeah some of the things regarding the peak brain activity is not true. Second, even assuming that, increasing age range doesn't really make it fair for that one year period - still unfairness exist because people do get more time to prepare in this case. So, this means it is still not possible to make it fair only through tweaking the age range, but in long run, across different attempts, it looks fair though imo. 







