import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Zack Myers' Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="p-2xs flex justify-center">
        <div className="max-w-[70ch] text-center text-balance">
          <h1>A collection of what I <i>think</i> I know about software dev and what I hope to <span className="underline decoration-secondary">help others</span> understand</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="max-w-[90ch] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis elit et lobortis dictum. Proin tempus gravida leo nec volutpat. Curabitur viverra mollis congue. Sed tincidunt vehicula metus id convallis. Nulla a scelerisque purus, sed interdum lacus. Duis a viverra nisi, nec faucibus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tempus pharetra ex eu tempus. Etiam auctor, risus a lobortis auctor, odio magna fringilla tellus, sit amet aliquam metus mauris nec felis. Aliquam erat volutpat. Phasellus pretium tellus purus. Fusce vitae turpis eu nisl feugiat porttitor.

          Nullam sed ornare orci. Nulla facilisi. Aenean eu ligula libero. Sed non tortor in dolor congue laoreet vel a velit. Phasellus vitae mollis diam. Fusce non nisi sit amet neque consectetur consectetur. Nam vitae nulla eget mauris ullamcorper pharetra. Nam nulla ipsum, dictum ut nisl at, bibendum maximus augue. Quisque semper ornare neque, vel elementum ligula fermentum a. Nulla facilisi. Donec faucibus ut felis vel condimentum. Donec at hendrerit mauris, ac cursus ante. Nunc feugiat leo faucibus augue interdum facilisis. Nunc fringilla augue nec arcu volutpat, non euismod nulla porta. Nam elementum neque eu bibendum cursus. Integer eget mauris tristique, mattis magna at, efficitur quam.

          Praesent ornare at justo ut placerat. Curabitur tincidunt nisi non consectetur congue. Donec id finibus ligula. Vestibulum sagittis, sem maximus venenatis pretium, augue enim efficitur neque, nec molestie felis mi at elit. Vestibulum rutrum posuere lacus, ac placerat est blandit at. Duis gravida eros at ultrices accumsan. Fusce at cursus ligula.

          Phasellus feugiat elit nibh, id congue lectus sagittis tincidunt. Morbi non nisi at purus pellentesque bibendum porta ac sem. Aliquam sagittis ultricies sapien, nec volutpat ligula egestas sed. Pellentesque ac nisi ligula. Donec egestas lacus justo, non fringilla lectus iaculis ac. Donec vitae ullamcorper felis. Nulla consectetur, augue ac auctor bibendum, felis tortor tincidunt erat, tempor pharetra elit dolor vitae sem. Curabitur mi augue, interdum at elementum at, luctus ut lorem. Pellentesque hendrerit nisl eget vulputate aliquet. Praesent placerat mollis luctus. Phasellus dui lorem, vestibulum a congue et, feugiat sed massa. Phasellus et dui pulvinar, ornare nunc vel, tristique erat. Cras eu tincidunt magna, dapibus sollicitudin nulla.

          Ut in ligula dapibus, ultrices enim non, facilisis ipsum. Vivamus pulvinar efficitur risus eget rhoncus. Nunc ultricies dictum ultricies. Duis convallis bibendum massa, commodo tristique diam vestibulum et. Mauris ut lorem pretium, dapibus tellus sit amet, tempor nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sapien lectus, elementum et aliquet ac, mollis id augue. Donec ac iaculis nulla. Fusce at laoreet sem. Quisque euismod nulla eget quam gravida mattis et sed dui. Cras quis eleifend nulla. Pellentesque eget felis dolor. Aenean sed dolor a ex fermentum fermentum in semper tortor. Nam mattis varius lorem hendrerit semper.
        </p>
      </div>
    </>
  );
}
