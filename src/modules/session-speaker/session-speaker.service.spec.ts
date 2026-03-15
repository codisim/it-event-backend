import { Test, TestingModule } from '@nestjs/testing';
import { SessionSpeakerService } from './session-speaker.service';

describe('SessionSpeakerService', () => {
  let service: SessionSpeakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionSpeakerService],
    }).compile();

    service = module.get<SessionSpeakerService>(SessionSpeakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
