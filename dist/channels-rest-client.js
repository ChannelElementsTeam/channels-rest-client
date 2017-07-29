"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const RestClient = require('node-rest-client').Client;
const SWITCH_PROTOCOL = 1;
const BANK_PROTOCOL = 1;
const CARD_REGISTRY_PROTOCOL = 1;
const MINE_PROTOCOL = 1;
class ChannelsRestClient {
    constructor() {
        this.restClient = new RestClient.Client();
    }
    getSwitchDescription(providerUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getServiceDescription(providerUrl);
        });
    }
    getBankDescription(providerUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getServiceDescription(providerUrl);
        });
    }
    getCardRegistryDescription(providerUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getServiceDescription(providerUrl);
        });
    }
    getMineDescription(providerUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getServiceDescription(providerUrl);
        });
    }
    getServiceDescription(providerUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.restClient.get(providerUrl, (data, providerResponse) => {
                    if (providerResponse.statusCode === 200) {
                        resolve(data);
                    }
                    else {
                        console.error("Failed", providerResponse.statusCode);
                        reject("Get provider failed");
                    }
                });
            });
        });
    }
    registerBankUser(serviceUrl, signedKeyIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(signedKeyIdentity, serviceUrl, BANK_PROTOCOL, 'register-user', {});
        });
    }
    registerSwitchUser(serviceUrl, signedKeyIdentity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(signedKeyIdentity, serviceUrl, SWITCH_PROTOCOL, 'register-user', details ? details : {});
        });
    }
    registerCardRegistryUser(serviceUrl, signedKeyIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(signedKeyIdentity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'register-user', {});
        });
    }
    registerMineUser(serviceUrl, signedKeyIdentity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(signedKeyIdentity, serviceUrl, MINE_PROTOCOL, 'register-user', {});
        });
    }
    bankGetAccount(serviceUrl, identity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, BANK_PROTOCOL, 'get-account', {});
        });
    }
    bankTransfer(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, BANK_PROTOCOL, 'transfer', details);
        });
    }
    switchPay(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'pay', details);
        });
    }
    switchCreateChannel(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'create', details);
        });
    }
    switchShareChannel(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'share', details);
        });
    }
    switchGetChannel(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'get', details);
        });
    }
    switchAcceptChannel(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'accept', details);
        });
    }
    switchDeleteChannel(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'delete', details);
        });
    }
    switchListChannels(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'list', details);
        });
    }
    switchGetRegistration(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'get-registration', details);
        });
    }
    switchUpdateRegistration(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, SWITCH_PROTOCOL, 'update-registration', details);
        });
    }
    cardRegistryPay(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'pay', details);
        });
    }
    cardRegistrySearch(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'search', details);
        });
    }
    cardRegistryGetReviews(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'get-reviews', details);
        });
    }
    cardRegistryReview(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'review', details);
        });
    }
    cardRegistryNotifyPurchase(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'notify-purchase', details);
        });
    }
    minePoll(serviceUrl, identity, details) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService(identity, serviceUrl, MINE_PROTOCOL, 'poll', details);
        });
    }
    requestService(identity, serviceUrl, protocolVersion, serviceName, details) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                version: protocolVersion,
                type: serviceName,
                identity: identity,
                details: details
            };
            const args = {
                data: request,
                headers: {
                    "Content-Type": "application/json"
                }
            };
            return new Promise((resolve, reject) => {
                this.restClient.post(serviceUrl, args, (data, serviceResponse) => {
                    if (serviceResponse.statusCode === 200) {
                        resolve(data);
                    }
                    else {
                        reject(serviceResponse.statusCode);
                    }
                });
            });
        });
    }
}
exports.ChannelsRestClient = ChannelsRestClient;
const channelsRestClient = new ChannelsRestClient();
exports.channelsRestClient = channelsRestClient;
//# sourceMappingURL=channels-rest-client.js.map