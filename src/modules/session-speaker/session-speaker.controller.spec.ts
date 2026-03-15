import { Test, TestingModule } from '@nestjs/testing';
import { SessionSpeakerController } from './session-speaker.controller';

describe('SessionSpeakerController', () => {
  let controller: SessionSpeakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionSpeakerController],
    }).compile();

    controller = module.get<SessionSpeakerController>(SessionSpeakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
