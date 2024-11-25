import { Injectable, Logger } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(private readonly configService: ConfigService) {
    sgMail.setApiKey(this.configService.get('mail.api_key'));
  }

  async sendEmail(to: string, subject: string, message: string): Promise<void> {
    const msg = {
      to,
      from: this.configService.get<string>('mail.my'),
      subject: subject,
      text: message,
      html: `<strong>${message}</strong>`,
    };

    try {
      await sgMail.send(msg);
      Logger.log(`Email sent to ${to}`);
    } catch (error) {
      Logger.error(`Error sending email: ${error}`);
    }
  }
}
