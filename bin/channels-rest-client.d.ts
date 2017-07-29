import { BankServiceDescription, SwitchServiceDescription, CardRegistryServiceDescription, MineServiceDescription, SignedKeyIdentity, SignedAddressIdentity, BankRegisterUserResponse, SwitchRegisterUserDetails, SwitchRegisterUserResponse, CardRegistryRegisterUserResponse, MineRegisterUserResponse, BankGetAccountResponse, BankTransferDetails, BankTransferResponse, SwitchPaymentDetails, SwitchPaymentResponse, ChannelCreateResponse, ChannelCreateDetails, ChannelShareDetails, ChannelShareResponse, ChannelGetResponse, ChannelGetDetails, ChannelAcceptResponse, ChannelAcceptDetails, ChannelDeleteDetails, ChannelDeleteResponse, ChannelsListDetails, ChannelsListResponse, GetSwitchRegistrationResponse, GetSwitchRegistrationDetails, UpdateSwitchRegistrationResponse, UpdateSwitchRegistrationDetails, CardRegistryPaymentDetails, CardRegistryPaymentResponse, CardRegistrySearchDetails, CardRegistrySearchResponse, CardRegistryGetReviewsDetails, CardRegistryGetReviewsResponse, CardRegistryReviewDetails, CardRegistryReviewResponse, CardRegistryNotifyPurchaseDetails, CardRegistryNotifyPurchaseResponse, MinePollDetails, MinePollResponse, ChannelShareCodeResponse, BankRegisterBankDetails, BankRegisterBankResponse, BankRegisterMineResponse, BankRegisterMineDetails, InterBankTransferResponse, InterBankTransferDetails } from "channels-common";
export declare class ChannelsRestClient {
    private restClient;
    getSwitchDescription(providerUrl: string): Promise<SwitchServiceDescription>;
    getBankDescription(providerUrl: string): Promise<BankServiceDescription>;
    getCardRegistryDescription(providerUrl: string): Promise<CardRegistryServiceDescription>;
    getMineDescription(providerUrl: string): Promise<MineServiceDescription>;
    private getServiceDescription<T>(providerUrl);
    registerBankUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity): Promise<BankRegisterUserResponse>;
    registerSwitchUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity, details?: SwitchRegisterUserDetails): Promise<SwitchRegisterUserResponse>;
    registerCardRegistryUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity): Promise<CardRegistryRegisterUserResponse>;
    registerMineUser(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity): Promise<MineRegisterUserResponse>;
    registerBankBank(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity, details: BankRegisterBankDetails): Promise<BankRegisterBankResponse>;
    registerBankMine(serviceUrl: string, signedKeyIdentity: SignedKeyIdentity, details: BankRegisterMineDetails): Promise<BankRegisterMineResponse>;
    bankGetAccount(serviceUrl: string, identity: SignedAddressIdentity): Promise<BankGetAccountResponse>;
    bankTransfer(serviceUrl: string, identity: SignedAddressIdentity, details: BankTransferDetails): Promise<BankTransferResponse>;
    interBankTransfer(serviceUrl: string, identity: SignedAddressIdentity, details: InterBankTransferDetails): Promise<InterBankTransferResponse>;
    switchGetInvitationFromShareCode(shareCodeUrl: string): Promise<ChannelShareCodeResponse>;
    switchPay(serviceUrl: string, identity: SignedAddressIdentity, details: SwitchPaymentDetails): Promise<SwitchPaymentResponse>;
    switchCreateChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelCreateDetails): Promise<ChannelCreateResponse>;
    switchShareChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelShareDetails): Promise<ChannelShareResponse>;
    switchGetChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelGetDetails): Promise<ChannelGetResponse>;
    switchAcceptChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelAcceptDetails): Promise<ChannelAcceptResponse>;
    switchDeleteChannel(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelDeleteDetails): Promise<ChannelDeleteResponse>;
    switchListChannels(serviceUrl: string, identity: SignedAddressIdentity, details: ChannelsListDetails): Promise<ChannelsListResponse>;
    switchGetRegistration(serviceUrl: string, identity: SignedAddressIdentity, details: GetSwitchRegistrationDetails): Promise<GetSwitchRegistrationResponse>;
    switchUpdateRegistration(serviceUrl: string, identity: SignedAddressIdentity, details: UpdateSwitchRegistrationDetails): Promise<UpdateSwitchRegistrationResponse>;
    cardRegistryPay(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryPaymentDetails): Promise<CardRegistryPaymentResponse>;
    cardRegistrySearch(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistrySearchDetails): Promise<CardRegistrySearchResponse>;
    cardRegistryGetReviews(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryGetReviewsDetails): Promise<CardRegistryGetReviewsResponse>;
    cardRegistryReview(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryReviewDetails): Promise<CardRegistryReviewResponse>;
    cardRegistryNotifyPurchase(serviceUrl: string, identity: SignedAddressIdentity, details: CardRegistryNotifyPurchaseDetails): Promise<CardRegistryNotifyPurchaseResponse>;
    minePoll(serviceUrl: string, identity: SignedAddressIdentity, details: MinePollDetails): Promise<MinePollResponse>;
    private requestService<I, D, T>(identity, serviceUrl, protocolVersion, serviceName, details);
    private normalizeProviderUrl(url, filename);
}
declare const channelsRestClient: ChannelsRestClient;
export { channelsRestClient };
