import { Request, Response } from 'express';
import { BankServiceDescription, SwitchServiceDescription, ServiceDescription, CardRegistryServiceDescription, MineServiceDescription, SignedKeyIdentity, SignedAddressIdentity, ServiceRequest, BankRegisterUserResponse, BankRegisterUserDetails, SwitchRegisterUserDetails, SwitchRegisterUserResponse, CardRegistryRegisterUserResponse, CardRegistryRegisterUserDetails, MineRegisterUserResponse, MineRegisterUserDetails, BankGetAccountResponse, BankGetAccountDetails, BankTransferDetails, BankTransferResponse, SwitchPaymentDetails, SwitchPaymentResponse, ChannelCreateResponse, ChannelCreateDetails, ChannelShareDetails, ChannelShareResponse, ChannelGetResponse, ChannelGetDetails, ChannelAcceptResponse, ChannelAcceptDetails, ChannelDeleteDetails, ChannelDeleteResponse, ChannelsListDetails, ChannelsListResponse, GetSwitchRegistrationResponse, GetSwitchRegistrationDetails, UpdateSwitchRegistrationResponse, UpdateSwitchRegistrationDetails, CardRegistryPaymentDetails, CardRegistryPaymentResponse, CardRegistrySearchDetails, CardRegistrySearchResponse, CardRegistryGetReviewsDetails, CardRegistryGetReviewsResponse, CardRegistryReviewDetails, CardRegistryReviewResponse, CardRegistryNotifyPurchaseDetails, CardRegistryNotifyPurchaseResponse, MinePollDetails, MinePollResponse } from "channels-common";

const RestClient = require('node-rest-client').Client;

const SWITCH_PROTOCOL = 1;
const BANK_PROTOCOL = 1;
const CARD_REGISTRY_PROTOCOL = 1;
const MINE_PROTOCOL = 1;

export class ChannelsRestClient {
  private restClient = new RestClient.Client() as IRestClient;

  async getSwitchDescription(providerUrl: string): Promise<SwitchServiceDescription> {
    return this.getServiceDescription<SwitchServiceDescription>(providerUrl);
  }

  async getBankDescription(providerUrl: string): Promise<BankServiceDescription> {
    return this.getServiceDescription<BankServiceDescription>(providerUrl);
  }
  async getCardRegistryDescription(providerUrl: string): Promise<CardRegistryServiceDescription> {
    return this.getServiceDescription<CardRegistryServiceDescription>(providerUrl);
  }

  async getMineDescription(providerUrl: string): Promise<MineServiceDescription> {
    return await this.getServiceDescription<MineServiceDescription>(providerUrl);
  }

  private async getServiceDescription<T extends ServiceDescription>(providerUrl: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.restClient.get(providerUrl, (data: T, providerResponse: Response) => {
        if (providerResponse.statusCode === 200) {
          resolve(data);
        } else {
          console.error("Failed", providerResponse.statusCode);
          reject("Get provider failed");
        }
      });
    });
  }

  async registerBankUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity): Promise<BankRegisterUserResponse> {
    return await this.requestService<SignedKeyIdentity, BankRegisterUserDetails, BankRegisterUserResponse>(signedKeyIdentity, serviceUrl, BANK_PROTOCOL, 'register-user', {});
  }

  async registerSwitchUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity, details?: SwitchRegisterUserDetails): Promise<SwitchRegisterUserResponse> {
    return await this.requestService<SignedKeyIdentity, SwitchRegisterUserDetails, SwitchRegisterUserResponse>(signedKeyIdentity, serviceUrl, SWITCH_PROTOCOL, 'register-user', details ? details : {});
  }

  async registerCardRegistryUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity): Promise<CardRegistryRegisterUserResponse> {
    return await this.requestService<SignedKeyIdentity, CardRegistryRegisterUserDetails, CardRegistryRegisterUserResponse>(signedKeyIdentity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'register-user', {});
  }

  async registerMineUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity): Promise<MineRegisterUserResponse> {
    return await this.requestService<SignedKeyIdentity, MineRegisterUserDetails, MineRegisterUserResponse>(signedKeyIdentity, serviceUrl, MINE_PROTOCOL, 'register-user', {});
  }

  async bankGetAccount(serviceUrl: string, identity: SignedAddressIdentity): Promise<BankGetAccountResponse> {
    return await this.requestService<SignedAddressIdentity, BankGetAccountDetails, BankGetAccountResponse>(identity, serviceUrl, BANK_PROTOCOL, 'get-account', {});
  }

  async bankTransfer(serviceUrl: string, identity: SignedAddressIdentity, details: BankTransferDetails): Promise<BankTransferResponse> {
    return await this.requestService<SignedAddressIdentity, BankTransferDetails, BankTransferResponse>(identity, serviceUrl, BANK_PROTOCOL, 'transfer', details);
  }

  async switchPay(serviceUrl: string, identity: SignedAddressIdentity, details: SwitchPaymentDetails): Promise<SwitchPaymentResponse> {
    return await this.requestService<SignedAddressIdentity, SwitchPaymentDetails, SwitchPaymentResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'pay', details);
  }

  async switchCreateChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelCreateDetails): Promise<ChannelCreateResponse> {
    return await this.requestService<SignedAddressIdentity, ChannelCreateDetails, ChannelCreateResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'create', details);
  }

  async switchShareChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelShareDetails): Promise<ChannelShareResponse> {
    return await this.requestService<SignedAddressIdentity, ChannelShareDetails, ChannelShareResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'share', details);
  }

  async switchGetChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelGetDetails): Promise<ChannelGetResponse> {
    return await this.requestService<SignedAddressIdentity, ChannelGetDetails, ChannelGetResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'get', details);
  }

  async switchAcceptChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelAcceptDetails): Promise<ChannelAcceptResponse> {
    return await this.requestService<SignedAddressIdentity, ChannelAcceptDetails, ChannelAcceptResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'accept', details);
  }

  async switchDeleteChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelDeleteDetails): Promise<ChannelDeleteResponse> {
    return await this.requestService<SignedAddressIdentity, ChannelDeleteDetails, ChannelDeleteResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'delete', details);
  }

  async switchListChannels(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelsListDetails): Promise<ChannelsListResponse> {
    return await this.requestService<SignedAddressIdentity, ChannelsListDetails, ChannelsListResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'list', details);
  }

  async switchGetRegistration(serviceUrl: string, identity: SignedAddressIdentity, details: GetSwitchRegistrationDetails): Promise<GetSwitchRegistrationResponse> {
    return await this.requestService<SignedAddressIdentity, GetSwitchRegistrationDetails, GetSwitchRegistrationResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'get-registration', details);
  }

  async switchUpdateRegistration(serviceUrl: string, identity: SignedAddressIdentity, details: UpdateSwitchRegistrationDetails): Promise<UpdateSwitchRegistrationResponse> {
    return await this.requestService<SignedAddressIdentity, UpdateSwitchRegistrationDetails, UpdateSwitchRegistrationResponse>(identity, serviceUrl, SWITCH_PROTOCOL, 'update-registration', details);
  }

  async cardRegistryPay(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryPaymentDetails): Promise<CardRegistryPaymentResponse> {
    return await this.requestService<SignedAddressIdentity, CardRegistryPaymentDetails, CardRegistryPaymentResponse>(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'pay', details);
  }

  async cardRegistrySearch(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistrySearchDetails): Promise<CardRegistrySearchResponse> {
    return await this.requestService<SignedAddressIdentity, CardRegistrySearchDetails, CardRegistrySearchResponse>(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'search', details);
  }

  async cardRegistryGetReviews(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryGetReviewsDetails): Promise<CardRegistryGetReviewsResponse> {
    return await this.requestService<SignedAddressIdentity, CardRegistryGetReviewsDetails, CardRegistryGetReviewsResponse>(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'get-reviews', details);
  }

  async cardRegistryReview(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryReviewDetails): Promise<CardRegistryReviewResponse> {
    return await this.requestService<SignedAddressIdentity, CardRegistryReviewDetails, CardRegistryReviewResponse>(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'review', details);
  }

  async cardRegistryNotifyPurchase(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryNotifyPurchaseDetails): Promise<CardRegistryNotifyPurchaseResponse> {
    return await this.requestService<SignedAddressIdentity, CardRegistryNotifyPurchaseDetails, CardRegistryNotifyPurchaseResponse>(identity, serviceUrl, CARD_REGISTRY_PROTOCOL, 'notify-purchase', details);
  }

  async minePoll(serviceUrl: string, identity: SignedAddressIdentity, details: MinePollDetails): Promise<MinePollResponse> {
    return await this.requestService<SignedAddressIdentity, MinePollDetails, MinePollResponse>(identity, serviceUrl, MINE_PROTOCOL, 'poll', details);
  }

  private async requestService<I extends SignedKeyIdentity | SignedAddressIdentity, D, T>(identity: I, serviceUrl: string, protocolVersion: number, serviceName: string, details: D): Promise<T> {
    const request: ServiceRequest<I, D> = {
      version: protocolVersion,
      type: serviceName,
      identity: identity,
      details: details
    };
    const args: PostArgs = {
      data: request,
      headers: {
        "Content-Type": "application/json"
      }
    };
    return new Promise<T>((resolve, reject) => {
      this.restClient.post(serviceUrl, args, (data: T, serviceResponse: Response) => {
        if (serviceResponse.statusCode === 200) {
          resolve(data);
        } else {
          reject(serviceResponse.statusCode);
        }
      });
    });
  }
}

interface PostArgs {
  data: any;
  headers: { [name: string]: string };
}
interface RestArgs {
  headers: { [name: string]: string };
}
interface IRestClient {
  get(url: string, callback: (data: any, response: Response) => void): void;

  get(url: string, args: RestArgs, callback: (data: any, response: Response) => void): void;
  post(url: string, args: PostArgs, callback: (data: any, response: Response) => void): void;
  delete(url: string, args: RestArgs, callback: (data: any, response: Response) => void): void;
}

const channelsRestClient = new ChannelsRestClient();

export { channelsRestClient };
