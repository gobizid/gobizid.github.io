import {qrController,deleteCookie} from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js";

wauthparam.auth_ws="d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
wauthparam.keyword="aHR0cHM6Ly93YS5tZS82Mjg5OTk3MTAwNDA/dGV4dD13aDR0NWF1dGgw";
wauthparam.tokencookiehourslifetime=18;
wauthparam.redirect ="/dashboard"
deleteCookie(wauthparam.tokencookiename);
qrController(wauthparam);