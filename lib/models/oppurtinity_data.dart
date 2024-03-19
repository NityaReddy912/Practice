class OpportunityData {
  String accountName;
  String opportunityName;
  String region;
  String vertical;
  String serviceLine;
  String sfdcid;
  int tcv;
  DateTime bidSubmissionDate;
  String preQualificationUrl;
  DateTime duration;
  String status;

  OpportunityData({
    required this.accountName,
    required this.opportunityName,
    required this.region,
    required this.serviceLine,
    required this.sfdcid,
    required this.tcv,
    required this.bidSubmissionDate,
    required this.duration,
    required this.preQualificationUrl,
    required this.vertical,
    required this.status,
  });

  Map<String, dynamic> toJson() {
    return {
      'AccountName': accountName,
      'OpportunityName': opportunityName,
      'region': region,
      'bidSubmissionDate': bidSubmissionDate,
      'SFDCID': sfdcid,
      'TCV': tcv,
      'Duration': duration,
      'Pre_Qualification_Url': preQualificationUrl,
      'Vertical ': vertical,
      'ServiceLine' : serviceLine,
      'status': status,
    };
  }
}
