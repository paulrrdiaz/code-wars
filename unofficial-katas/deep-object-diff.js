import all from "ramda/src/all";
import append from "ramda/src/append";
import apply from "ramda/src/apply";
import both from "ramda/src/both";
import complement from "ramda/src/complement";
import compose from "ramda/src/compose";
import cond from "ramda/src/cond";
import curry from "ramda/src/curry";
import equals from "ramda/src/equals";
import has from "ramda/src/has";
import ifElse from "ramda/src/ifElse";
import map from "ramda/src/map";
import mergeRight from "ramda/src/mergeRight";
import mergeWith from "ramda/src/mergeWith";
import objOf from "ramda/src/objOf";
import identity from "ramda/src/identity";
import pipe from "ramda/src/pipe";
import pick from "ramda/src/pick";
import prepend from "ramda/src/prepend";
import reject from "ramda/src/reject";
import nth from "ramda/src/nth";
import type from "ramda/src/type";
import useWith from "ramda/src/useWith";
import values from "ramda/src/values";
import path from "ramda/src/path";

const isObject = compose(equals("Object"), type);
const allAreObjects = compose(all(isObject), values);
const hasLeft = has("left");
const hasRight = has("right");
const hasBoth = both(hasLeft, hasRight);
const noOne = complement(hasBoth);
const isEqual = both(hasBoth, compose(apply(equals), values));

const markAdded = compose(append(undefined), values);
const markRemoved = compose(prepend(undefined), values);
const isAddition = both(hasLeft, complement(hasRight));
const isRemoval = both(complement(hasLeft), hasRight);
const parse = curry((whiteList, obj) =>
  mergeRight(reject(isEqual, obj), map(path(["left"]), pick(whiteList, obj)))
);

export const objectDiff = curry(
  (left = {}, right = {}, whiteList = []) =>
    pipe(
      useWith(mergeWith(mergeRight), [map(objOf("left")), map(objOf("right"))]),
      parse(whiteList),
      map(
        pipe(
          cond([
            [noOne, identity],
            [isAddition, markAdded],
            [isRemoval, markRemoved],
            [
              hasBoth,
              ifElse(
                allAreObjects,
                compose(apply(objectDiff), values),
                pipe(values, nth(0))
              ),
            ],
          ])
        )
      )
    )(left, right)
);
