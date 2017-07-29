"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var RestClient = require('node-rest-client').Client;
var SWITCH_PROTOCOL = 1;
var BANK_PROTOCOL = 1;
var CARD_REGISTRY_PROTOCOL = 1;
var MINE_PROTOCOL = 1;
var ChannelsRestClient = (function () {
    function ChannelsRestClient() {
        this.restClient = new RestClient();
    }
    ChannelsRestClient.prototype.getSwitchDescription = function (providerUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getServiceDescription(this.normalizeProviderUrl(providerUrl, 'channels-switch.json'))];
            });
        });
    };
    ChannelsRestClient.prototype.getBankDescription = function (providerUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getServiceDescription(this.normalizeProviderUrl(providerUrl, 'channels-bank.json'))];
            });
        });
    };
    ChannelsRestClient.prototype.getCardRegistryDescription = function (providerUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getServiceDescription(this.normalizeProviderUrl(providerUrl, 'channels-card-registry.json'))];
            });
        });
    };
    ChannelsRestClient.prototype.getMineDescription = function (providerUrl) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getServiceDescription(this.normalizeProviderUrl(providerUrl, 'channels-mine.json'))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.getServiceDescription = function (providerUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.restClient.get(providerUrl, function (data, providerResponse) {
                            if (providerResponse.statusCode === 200) {
                                resolve(data);
                            }
                            else {
                                console.error("Failed", providerResponse.statusCode);
                                reject("Get provider failed");
                            }
                        });
                    })];
            });
        });
    };
    ChannelsRestClient.prototype.registerBankUser = function (serviceUrl, signedKeyIdentity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(signedKeyIdentity, serviceUrl, BANK_PROTOCOL, 'register-user', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.registerSwitchUser = function (serviceUrl, signedKeyIdentity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(signedKeyIdentity, serviceUrl, SWITCH_PROTOCOL, 'register-user', details ? details : {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.registerCardRegistryUser = function (serviceUrl, signedKeyIdentity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(signedKeyIdentity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'register-user', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.registerMineUser = function (serviceUrl, signedKeyIdentity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(signedKeyIdentity, serviceUrl, MINE_PROTOCOL, 'register-user', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.bankGetAccount = function (serviceUrl, identity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, BANK_PROTOCOL, 'get-account', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.bankTransfer = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, BANK_PROTOCOL, 'transfer', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchGetInvitationFromShareCode = function (shareCodeUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var args = {
                            headers: {
                                'Accept': 'application/json'
                            }
                        };
                        _this.restClient.get(shareCodeUrl, args, function (data, response) {
                            if (response.statusCode === 200) {
                                resolve(data);
                            }
                            else {
                                console.error("Failed", response.statusCode);
                                reject("Get share code failed");
                            }
                        });
                    })];
            });
        });
    };
    ChannelsRestClient.prototype.switchPay = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'pay', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchCreateChannel = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'create', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchShareChannel = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'share', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchGetChannel = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'get', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchAcceptChannel = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'accept', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchDeleteChannel = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'delete', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchListChannels = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'list', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchGetRegistration = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'get-registration', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.switchUpdateRegistration = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'update-registration', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.cardRegistryPay = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'pay', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.cardRegistrySearch = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'search', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.cardRegistryGetReviews = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'get-reviews', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.cardRegistryReview = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'review', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.cardRegistryNotifyPurchase = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'notify-purchase', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.minePoll = function (serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService(identity, serviceUrl, MINE_PROTOCOL, 'poll', details)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChannelsRestClient.prototype.requestService = function (identity, serviceUrl, protocolVersion, serviceName, details) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var request, args;
            return __generator(this, function (_a) {
                request = {
                    version: protocolVersion,
                    type: serviceName,
                    identity: identity,
                    details: details
                };
                args = {
                    data: request,
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.restClient.post(serviceUrl, args, function (data, serviceResponse) {
                            if (serviceResponse.statusCode === 200) {
                                resolve(data);
                            }
                            else {
                                reject(serviceResponse.statusCode);
                            }
                        });
                    })];
            });
        });
    };
    ChannelsRestClient.prototype.normalizeProviderUrl = function (url, filename) {
        if (url.indexOf(':') < 0) {
            url = 'https://' + url;
        }
        if (/^https?:\/\/[^\/]+\/?$/.test(url)) {
            if (!url.endsWith('/')) {
                url = url + '/';
            }
            url = url + filename;
        }
        return url;
    };
    return ChannelsRestClient;
}());
exports.ChannelsRestClient = ChannelsRestClient;
var channelsRestClient = new ChannelsRestClient();
exports.channelsRestClient = channelsRestClient;
//# sourceMappingURL=channels-rest-client.js.map