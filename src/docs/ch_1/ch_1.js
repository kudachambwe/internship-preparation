/**
 * Created by kuda on 17.07.2017.
 */

import React from 'react';
import {MediaBox} from 'react-materialize';
import '../css/docs.css';
import test from './ch_1.1.png';


export const chapter_1 = (

    <div>
        <h5 className="center-on-small-only grey-text darken-3 light center">Introduction</h5>

        <p>Oil has been used for lighting purposes for many thousands of years. In areas where oil is found in shallow
            reservoirs, seeps of crude oil or gas may naturally develop, and some oil could simply be collected from
            seepage or tar ponds.</p>

        <p>Historically, we know the tales of eternal fires where oil and gas seeps ignited and burned. One example is
            the site where the famous oracle of Delphi was built around 1,000 B.C. Written sources from 500 B.C.
            describe how the Chinese used natural gas to boil water</p>

        <p>It was not until 1859 that "Colonel" Edwin Drake drilled the first successful oil well, with the sole purpose
            of finding oil. The Drake Well was located in the middle of quiet farm country in northwestern Pennsylvania,
            and sparked the international search for an industrial use for petroleum.</p>

        <MediaBox src={test} caption="Photo: Drake Well Museum Collection, Titusville, PA" width="500"/>

        <p>These wells were shallow by modern standards, often less than 50 meters deep, but they produced large
            quantities of oil. In this picture of the Tarr Farm, Oil Creek Valley, the Phillips well on the right
            initially produced 4,000 barrels per day in October, 1861, and the Woodford well on the left came in at
            1,500 barrels per day in July, 1862.</p>

        <p>The oil was collected in the wooden tank pictured in the foreground. As you will no doubt notice, there are
            many different-sized barrels in the background. At this time, barrel size had not been standardized, which
            made statements like "oil is selling at $5 per barrel" very confusing (today a barrel is 159 liters (see
            units on p. 141). But even in those days, overproduction was something to be avoided. When the "Empire well"
            was completed in September 1861, it produced 3,000 barrels per day, flooding the market, and the price of
            oil plummeted to 10 cents a barrel. In some ways, we see the same effect today. When new shale gas fields in
            the US are constrained by the capacity of the existing oil and gas pipeline network, it results in
            bottlenecks and low prices at the production site.</p>

        <p>Soon, oil had replaced most other fuels for motorized transport. The automobile industry developed at the end
            of the 19th century, and quickly adopted oil as fuel. Gasoline engines were essential for designing
            successful aircraft. Ships driven by oil could move up to twice as fast as their coal- powered counterparts,
            a vital military advantage. Gas was burned off or left in the ground</p>

        <p>Despite attempts at gas transportation as far back as 1821, it was not until after World War II that welding
            techniques, pipe rolling, and metallurgical advances allowed for the construction of reliable long distance
            pipelines, creating a natural gas industry boom. At the same time, the petrochemical industry with its new
            plastic materials quickly increased production. Even now, gas production is gaining market share as
            liquefied natural gas (LNG) provides an economical way of transporting gas from even the remotest sites.</p>

        <p>With the appearance of automobiles and more advanced consumers, it was necessary to improve and standardize
            the marketable products. Refining was necessary to divide the crude in fractions that could be blended to
            precise specifications. As value shifted from refining to upstream production, it became even more essential
            for refineries to increase high-value fuel yield from a variety of crudes. From 10-40% gasoline for crude a
            century ago, a modern refinery can get up to 70% gasoline from the same quality crude through a variety of
            advanced reforming and cracking processes.</p>

        <p>Chemicals derived from petroleum or natural gas – petrochemicals – are an essential part of the chemical
            industry today. Petrochemistry is a fairly young 2 industry; it only started to grow in the 1940s, more than
            80 years after the drilling of the first commercial oil well.</p>

        <p>
            During World War II, the demand for synthetic materials to replace costly and sometimes less efficient
            products caused the petrochemical industry to develop into a major player in modern economy and society.</p>

        <p>Before then, it was a tentative, experimental sector, starting with basic materials:</p>

        <div>
            <ul>
                <li className="disk"> Synthetic rubbers in the 1900s</li>
                <li className="circle"> Bakelite, the first petrochemical-derived plastic, in 1907</li>
                <li className="circle"> First petrochemical solvents in the 1920s</li>
                <li className="circle"> Polystyrene in the 1930s</li>
            </ul>
        </div>

        <p>And it then moved to an incredible variety of areas:</p>

        <ul>
            <li className="circle"> Household goods (kitchen appliances, textiles, furniture)</li>
            <li className="circle"> Medicine (heart pacemakers, transfusion bags)</li>
            <li className="circle"> Leisure (running shoes, computers...)</li>
            <li className="circle"> Highly specialized fields like archaeology and crime detection</li>
        </ul>

    </div>
);