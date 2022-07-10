# Domain transfert

Originaly, the registration for camionpizzmania.ch have been done through cpnv account.

To transfert the domain to the route53 owner by support-it@camionpizzamania.ch, we proceeded like this.

## Transfert domain to another AWS account

* [AWS Doc](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html)
* [AWS Cli doc](https://docs.aws.amazon.com/cli/latest/reference/route53domains/transfer-domain-to-another-aws-account.html)

```
[Input]
aws route53domains transfer-domain-to-another-aws-account --domain-name camionpizzamania.ch --account-id 842395284362 --region us-east-1

[Output]
{
    "OperationId": "e77bd9ba-ff49-49cc-9480-1c8224520931",
    "Password": "XMa=XX}4Rsb}$X"
}
```

![Transfert in progress](img/domainTransfertInProgress.PNG)