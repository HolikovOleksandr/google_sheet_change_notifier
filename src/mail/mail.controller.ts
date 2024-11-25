import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('send-test-email')
  async sendTestEmail() {
    try {
      await this.mailService.sendEmail(
        'olga.vovnyanko99@gmail.com',
        'Test Email Subject',
        'This is a test email message.',
      );
      
      return { message: 'Test email sent successfully' };
    } catch (error) {
      return { message: 'Failed to send test email', error: error.message };
    }
  }
}
