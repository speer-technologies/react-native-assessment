import React from "react";
import { StackActions } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/routers";

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

function navigate(routeName, params, key) {
  if (__DEV__) {
    navigationRef.current.navigate(routeName, params, key);
    return;
  }
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(routeName, params, key);
  }
}

function goBack() {
  if (__DEV__) {
    navigationRef.current.goBack();
    return;
  }
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
}

function push(routeName, params) {
  if (__DEV__) {
    const pushAction = StackActions.push(routeName, params);
    navigationRef.current.dispatch(pushAction);
    return;
  }
  if (isReadyRef.current && navigationRef.current) {
    const pushAction = StackActions.push(routeName, params);
    navigationRef.current.dispatch(pushAction);
  }
}

function pop(value) {
  if (__DEV__) {
    const popAction = StackActions.pop(value);
    navigationRef.current.dispatch(popAction);
    return;
  }
  if (isReadyRef.current && navigationRef.current) {
    const popAction = StackActions.pop(value);
    navigationRef.current.dispatch(popAction);
  }
}

function reset(routeName, params) {
  if (__DEV__) {
    const navigateAction = CommonActions.navigate({
      routeName: routeName,
      params: params,
      action: CommonActions.navigate(routeName),
    });
    navigationRef.dispatch(navigateAction);
    return;
  }
  if (isReadyRef.current && navigationRef.current) {
    const navigateAction = CommonActions.navigate({
      routeName: routeName,
      params: params,
      action: CommonActions.navigate(routeName),
    });
    navigationRef.dispatch(navigateAction);
  }
}

function getNavigator() {
  return navigationRef;
}

export default {
  navigate,
  reset,
  getNavigator,
  goBack,
  push,
  pop,
};
