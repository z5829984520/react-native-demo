/*
* http请求中间层从这里暴露给ui统一管理
* */
import Request from './request'
import api from '../config/api'
import enums from './enums'

const request = new Request();

const demoSerive = {
};

export {
  demoSerive
}