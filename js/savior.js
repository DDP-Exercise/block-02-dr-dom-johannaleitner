"use strict";
/*******************************************************
 *     savior.js - 40p.
 *
 *     About time, savior - we need your help!
 *     Dr. DOM has attacked our webpage and spread his
 *     chaos all over it! We called our heroes, but he
 *     took them all captive! He summoned his list of
 *     minions to bother our users. We are in deep trouble!
 *
 *     Please, savior, >>RESTORE OUR OLD WEBPAGE<<!
 *     The people from the internets need you!
 *
 *     We shouldn't need to talk about this, but please,
 *     savior, stick to our ways and traditions! Do not
 *     fall for the dark side, don't use dark HTML or CSS
 *     magic to save us! Lydia, the goddess of judgment
 *     is watching. We have to do it the right way.
 *     The JavaScript way!
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/
/**
 * TODO 1:
 * First of all, we need to be able to read the text again,
 * without the risk of catching an eye infection!
 *
 * Johanna's comments: Dr.DOM changed all <p> elements to pink on green
 * /

 //get all paragraph elements */
 const paragraphs = document.getElementsByTagName("p");

 // loop over them
 for (const p of paragraphs) {
 p.style.color = "";            // reset text color
 p.style.backgroundColor = "";  // reset background color
 }

/**
 * TODO 2:
 * Great job! So much easier on the eyes! Now, let's tackle those minions!
 * Can't we just remove them all together?
 *
 * Johanna's comments: Dr.DOM inserted a new <ul> before our heroes list
 */
// get original heroes list
const heroesList = document.getElementById("heroes_of_the_web");

// the minion list is right before it
const minionList = heroesList.previousElementSibling;

// remove minion list
minionList.remove();

/**
 * TODO 3:
 * Wow! You are so powerful! Quick now, set our heroes of the web free!
 * And while at it, let the world know again, that they are back in town!
 */
// show heroes again
heroesList.style.visibility = "visible";

// restore introduction text
const intro = document.getElementById("message").nextElementSibling;
intro.textContent = "Let us introduce to you our list of Web-Heroes:";

/**
 * TODO 4:
 * Our Webpage is safe again! But Dr. Dom is still holding our Headline as a hostage!
 * Do your thing, savior!
 */
const title = document.getElementById("title");
title.textContent = "We, the mighty Heroes of the web, will protect you!";

/**
 * TODO 5:
 * You saved the day, again! I knew I could count on you. Our Website is restored,
 * our heroes are freed and there is no sign, Dr. DOM has ever done his evil.
 *
 * It might sound paranoid. But I can't get rid of the feeling, that he is still here,
 * somewhere in the DOM. I can still feel his Code. Can you identify the source and remove it?
 */

// select the dr.dom script directly
const drDomScript = document.querySelector('script[src="js/dr.dom.js"]');

// remove it
drDomScript.remove();